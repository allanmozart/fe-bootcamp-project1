# fe-bootcamp-project1

game: hangman
requirments:
    hangman should be played by 2
    dificulty must be selected, each dificulty defines the number of characters of the target word:
        easy: 4
            attempts: 5
        medium: 6
            attempts: 4
        hard: 8 or + (if more than 8 letters then console prints the number of underscore according tho the letter´s length)
            attempts: 4
    first player write the target word and draw the hang with "word underscores"
    player1 gives a hint few tries if player2 is wrong after X times?
    second player has X attempts based on dificulty level
    second player tries to guess the word by word
        if player2 is wrong then the wrong letter is printed in the console
        if player2 os right then the right letter is printed in place instead of the underscore