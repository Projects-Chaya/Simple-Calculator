//Strategy 1: Minus

class Minus : ICalculateInterface
{
public int Calculate(int value1, int value2)
    {
        //define logic
        return value1 - value2;
    }
}
//Strategy 2: Plussus
class Plus : ICalculateInterface
{
    public int Calculate(int value1, int value2)
    {
        //define logic
        return value1 + value2;
    }
}
//Strategy 3: Multiplication

class Multiplication : ICalculateInterface
{
public int Calculate(int value1, int value2)
    {
        //define logic
        return value1 * value2;
    }
}

//Strategy 4: Division

class Division : ICalculateInterface
{
public int Calculate(int value1, int value2)
    {
        //define logic
        return value1 / value2;
    }
}