/*
Получаем рандомное число.
Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function getRandomNumber(min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }

  if (min >= max) {
    return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
Проверяем максимальную длину строки
Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length
 */
function checkMaxCommentLength(comment, maxLength) {
  if (comment.length <= maxLength) {
    return true;
  }

  return false;
}

getRandomNumber();
checkMaxCommentLength();
