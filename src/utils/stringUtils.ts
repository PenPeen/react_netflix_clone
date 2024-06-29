/**
 * 指定された文字数で文字列を切り捨て、省略形に整形します。
 * @param {string | undefined} str - 切り捨てる元の文字列
 * @param {number} n - 保持する最大文字数
 * @returns {string} 切り捨て後の文字列
 */
export const truncate = (str: string | undefined, n: number): string => {
  if (!str) {
    return '';
  }
  return str.length > n ? str.substring(0, n - 1) + '...' : str;
};
