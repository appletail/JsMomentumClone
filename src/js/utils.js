/**
 * 
 * @param {number} min 랜덤 숫자 최저값(이상)
 * @param {number} max 랜덤 숫자 최대값(이하)
 * @returns {number} min이상 max 이하의 정수
 */
export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

