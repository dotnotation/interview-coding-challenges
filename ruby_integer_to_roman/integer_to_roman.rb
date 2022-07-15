class IntegerToRoman

    def initialize(num)
        @num = num
    end

    def roman 
        {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        }
    end

    def convert
        converted = ""
        roman.keys.each do |k|
            while @num >= roman[k] 
                converted += k.to_s  
                @num -= roman[k]
            end
        end
        puts converted
    end

end

i = IntegerToRoman.new(1)
