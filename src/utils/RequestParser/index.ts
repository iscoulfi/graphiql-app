const isPlainObject = (object: unknown): object is Record<string, unknown> =>
  Object.prototype.toString.call(object) === '[object Object]';

class RequestParser {
  static parseJson<T extends object>(object: string, callback?: (object: T) => T | Error | void) {
    try {
      if (!object?.trim()) return;

      const parsed: T | null = JSON.parse(object);

      if (isPlainObject(parsed)) return callback ? callback(parsed) : parsed;

      throw new Error(`Failed to parse "${object}" as a JSON object`);
    } catch (error) {
      if (error instanceof Error) return error;
    }
  }

  static parse(
    variables: string,
    headers: string
  ): { variables: Record<string, unknown>; headers: Record<string, string> } {
    const parsedVariables = parseJson<Record<string, unknown>>(variables);

    if (parsedVariables instanceof Error) {
      throw new Error(`Invalid variables: ${parsedVariables.message}`);
    }

    const parsedHeaders = parseJson<Record<string, string>>(headers, (parsed) => {
      try {
        new Headers(parsed);
        return parsed;
      } catch (error) {
        if (error instanceof Error) throw error;
      }
    });

    if (parsedHeaders instanceof Error) {
      throw new Error(`Invalid headers: ${parsedHeaders.message}`);
    }

    return {
      variables: parsedVariables ?? {},
      headers: parsedHeaders ?? {},
    };
  }
}

export const { parse, parseJson } = RequestParser;
