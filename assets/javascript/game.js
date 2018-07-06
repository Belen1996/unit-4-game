class Game {

    constructor(winscount, lossescount, randomnumber, accumulator, yellow, red, purple, green) {
        this.winscount = winscount;
        this.lossescount = lossescount;
        this.randomnumber = randomnumber;
        this.accumulator = accumulator;
        this.yellow = yellow;
        this.red = red;
        this.purple = purple;
        this.green = green;
    }

    get winscount() {
        return this._winscount;
    }

    set winscount(value) {
        this._winscount = value;
    }

    get lossescount() {
        return this._lossescount;
    }

    set lossescount(value) {
        this._lossescount = value;
    }

    get randomnumber() {
        return this._randomnumber;
    }

    set randomnumber(value) {
        if(value == null) {
            this._randomnumber = Game.getRandomNumberInRange(19, 120);
        } else {
            this._randomnumber = value;
        }
    }

    get accumulator() {
        return this._accumulator;
    }

    set accumulator(value) {
        this._accumulator = value;
    }

    get yellow() {
        return this._yellow;
    }

    set yellow(value) {
        if(value == null) {
            this._yellow = Game.getRandomNumberInRange(1,12);
        } else {
            this._yellow = value;
        }
    }

    get red() {
        return this._red;
    }

    set red(value) {
        if(value == null) {
            this._red = Game.getRandomNumberInRange(1,12);
        } else {
            this._red = value;
        }
    }

    get purple() {
        return this._purple;
    }

    set purple(value) {
        if(value == null) {
            this._purple = Game.getRandomNumberInRange(1,12);
        } else {
            this._purple = value;
        }
    }

    get green() {
        return this._green;
    }

    set green(value) {
        if(value == null) {
            this._green = Game.getRandomNumberInRange(1,12);
        } else {
            this._green = value;
        }
    }

    userPlayedYellow() {
        return Game.analyzePlay(new Game(this.winscount, this.lossescount, this.randomnumber, this.accumulator + this.yellow, this.yellow, this.red, this.purple, this.green));
    }

    userPlayedRed() {
        return Game.analyzePlay(new Game(this.winscount, this.lossescount, this.randomnumber, this.accumulator + this.red, this.yellow, this.red, this.purple, this.green));
    }

    userPlayedPurple(){
        return Game.analyzePlay(new Game(this.winscount, this.lossescount, this.randomnumber, this.accumulator + this.purple, this.yellow, this.red, this.purple, this.green)); 
    }

    userPlayedGreen() {
        return Game.analyzePlay(new Game(this.winscount, this.lossescount, this.randomnumber, this.accumulator + this.green, this.yellow, this.red, this.purple, this.green));
    }

    static analyzePlay(game) {
        if(game.accumulator === game.randomnumber) {
            return new Game(game.winscount + 1, game.lossescount, null, 0, null, null, null, null);
        } else if(game.accumulator > game.randomnumber) {
            return new Game(game.winscount, game.lossescount + 1, null, 0, null, null, null, null);
        } else {
            return game;
        }
    }

    static getRandomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min - 1)) + min;
    }

}

function renderGameResults(winscount, lossescount, randomnumber, accumulator) {
    $("#winscount").text(winscount);
    $("#lossescount").text(lossescount);
    $("#randomnumber").text(randomnumber);
    $("#accumulator").text(accumulator);
}

function initializeGame() {
    let game = new Game(0, 0, null, 0, null, null, null, null);

    $("#yellow").on('click', function (event) {
        game = game.userPlayedYellow();
        renderGameResults(game.winscount, game.lossescount, game.randomnumber, game.accumulator);
    });
    
    $("#red").on("click", function (event) {
        game = game.userPlayedRed();
        renderGameResults(game.winscount, game.lossescount, game.randomnumber, game.accumulator);
    });
    
    $("#purple").on("click", function (event) {
        game = game.userPlayedPurple();
        renderGameResults(game.winscount, game.lossescount, game.randomnumber, game.accumulator);
    });
    
    $("#green").on("click", function (event) {
        game = game.userPlayedGreen();
        renderGameResults(game.winscount, game.lossescount, game.randomnumber, game.accumulator);
    });
    
    renderGameResults(game.winscount, game.lossescount, game.randomnumber, game.accumulator);
}

initializeGame();
