import { parseJson, parse } from 'utils';
import { describe, it, expect, vi } from 'vitest';

describe('parseJson', () => {
  it('should return undefined for empty input', () => {
    expect(parseJson('')).toBeUndefined();
    expect(parseJson('   ')).toBeUndefined();
  });

  it('should parse a valid JSON object', () => {
    const input = '{"foo": 123, "bar": "baz"}';
    const result = parseJson<{ foo: number; bar: string }>(input);
    expect(result).toEqual({ foo: 123, bar: 'baz' });
  });

  it('should parse a valid JSON object with the callback function', () => {
    const input = '{"foo": 123, "bar": "baz"}';
    const callback = vi.fn((obj) => ({ ...obj, baz: true }));
    const result = parseJson<{ foo: number; bar: string; baz?: boolean }>(input, callback);
    expect(result).toEqual({ foo: 123, bar: 'baz', baz: true });
  });

  it('should throw an error for invalid input', () => {
    const input1 = '[1, 2, 3]';
    const result1 = parseJson<{ foo: number; bar: string }>(input1);
    expect(result1).toBeInstanceOf(Error);
    const input2 = '{"foo": 123, "bar": "baz"';
    const result2 = parseJson<{ foo: number; bar: string }>(input2);
    expect(result2).toBeInstanceOf(Error);
  });
});

describe('parse', () => {
  it('should parse a valid input', () => {
    const input: [string, string] = ['{"foo": 123, "bar": "baz"}', '{"baz": true}'];
    const result = parse(...input);
    expect(result).toEqual({ variables: { foo: 123, bar: 'baz' }, headers: { baz: true } });
  });

  it('should throw an error for invalid input', () => {
    const input1: [string, string] = ['{"foo": 123, "bar": "baz"', ''];
    try {
      parse(...input1);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
    const input2: [string, string] = ['{"bar": "baz"}', '{"": "foo"}'];
    try {
      parse(...input2);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
