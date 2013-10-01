document.write('<h4>Reverse String</h4>');

/*
 * Reverses the characters in the input text
 */
var reverseString = function(text) {
  var result = '';
  for(var index = text.length - 1; index >= 0; index--) {
    result += text[index];
  }
  return result;
//  return text.split('').reverse().join('');
}
document.write('<p>hello -> ' + reverseString('hello') + '</p>');
document.write('<p>a longer example -> ' + reverseString('a longer example') + '</p>');

document.write('<h4>Filter Text Array by Length</h4>');

/*
 * Takes an input array of text items and returns a list of the
 * elements that are longer than length
 */
var filterWordLength = function(list, length) {
  var result = [];
  for(var index = 0; index < list.length; index++) {
    var element = list[index];
    if((typeof element === 'string') && (element.length > length)) {
      result.push(element);
	}
  }
  return result;
}
var testWords = [
  'short',
  'longer',
  'maybe even longer',
  'a really long sentance or something'
];
document.write('<p>7 -> ' + filterWordLength(testWords, 7) + '</p>');
document.write('<p>1000 -> ' + filterWordLength(testWords, 100) + '</p>');

/*
 * Returns a greeting based on the time of day.
 * Morning is midnight to noon, afternoon is noon to five,
 * otherwise it's the evening.
 */
var dateGreeting = function(date) {
  var result = '';
  return result;
}
