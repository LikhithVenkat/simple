var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
  // 5 letter words
  $scope.words = [
    'hello',
    'world',
    'react',
    'plane',
    'train',
    'grain',
    'brain',
    'plain',
    'again',
    'build',
    'slice',
    'space',
    'place',
    'grace',
    'grape',
    'grate',
    'great',
    'graze',
    'stand',
    'brand',
    'grand',
    'grant',
    'grind',
  ];
  $scope.word = $scope.words[Math.floor(Math.random() * $scope.words.length)];

  $scope.guesses = []; // array of guesses

  $scope.win = false;
  $scope.lose = false;

  $scope.guess = ''; // current guess

  $scope.guessCount = 0;
  $scope.guessLimit = 6;

  $scope.checkGuess = function () {
    $scope.guessCount++;
    $scope.guess = $scope.guess.toLowerCase();
    if ($scope.guess === '') {
      return;
    }
    if (!$scope.words.includes($scope.guess)) {
      alert('Word not in list!');
      $scope.guess = '';
      return;
    }
    if ($scope.guesses.includes($scope.guess)) {
      alert('Already guessed!');
      $scope.guess = '';
      return;
    }
    if ($scope.guessCount >= $scope.guessLimit) {
      alert('You lose!');
      $scope.lose = true;
    }
    if ($scope.guess === $scope.word) {
      alert('You win!');
      $scope.win = true;
    }
    $scope.guesses.push($scope.guess);
    $scope.guess = '';
  };

  // the below function is used to return the color of the letter based on the guess
  $scope.colorClass = function (letter, guess_word) {
    if ($scope.word.indexOf(letter) === guess_word.indexOf(letter)) {
      return 'bg-green-500';
    } else if ($scope.word.includes(letter)) {
      return 'bg-yellow-500';
    } else {
      return 'bg-gray-400';
    }
  };

  $scope.range = function (min, max, step) {
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) {
      input.push(i);
    }
    return input;
  };
});