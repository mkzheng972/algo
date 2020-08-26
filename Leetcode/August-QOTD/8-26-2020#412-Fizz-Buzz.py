class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        
        # in case of map[7] = 'Jazz'
        map = {}
        map[3] = 'Fizz'
        map[5] = 'Buzz'
        output = []
        for i in range(1, n+1):
            newStr = ''
            for key in map:
                if i % key == 0:
                    newStr += map[key]
            if len(newStr) == 0:
                output.append(str(i))
            else:
                output.append(newStr)
        return output
    
        """
        brute force simple version
        
        output = []
        for i in range(1, n+1):
            if i % 3 == 0 and i % 5 == 0:
                output.append("FizzBuzz")
            elif i % 3 == 0:
                output.append("Fizz")
            elif i % 5 == 0:
                output.append("Buzz")
            else:
                output.append(str(i))
        return output
        """
