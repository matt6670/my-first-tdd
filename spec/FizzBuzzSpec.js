describe("FizzBuzz", function(){
    beforeEach(function() {
        string = "asdjasd";
        number = Math.floor(Math.random()*100);

      });

    it ("should return fizz when divisible by 3", function(){
        expect(fizzbuzz(3)).toEqual("fizz");
    })

    it ("should return buzz when divisible by 5", function(){
        expect(fizzbuzz(5)).toEqual("buzz");
    })

    it ("should return fizzbuzz when divisible by 3 and 5", function(){
        expect(fizzbuzz(15)).toEqual("fizzbuzz");
    })

    it ("should return n when not divisible by 3 or 5", function(){
        expect(fizzbuzz(2)).toEqual(2);
    })

    it ("should return 'don't input a string' if a string is inputted", function(){
        expect(fizzbuzz(string)).toEqual("don't input a string");
    })

})