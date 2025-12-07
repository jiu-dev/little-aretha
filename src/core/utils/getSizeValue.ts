export function getSizeValue<T extends Record<string, string>>(
  size: string,
  sizes: T
): string | undefined {
  return size in sizes ? sizes[size] : undefined;
}
