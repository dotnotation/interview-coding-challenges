import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;


class Result {

    /*
     * Complete the 'isPossible' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts following parameters:
     *  1. INTEGER a
     *  2. INTEGER b
     *  3. INTEGER c
     *  4. INTEGER d
     */
    static LinkedList<Pair<Integer,Integer>> pairs = new LinkedList<Pair<Integer,Integer>>();
    public static String isPossible(Integer a, Integer b, Integer c, Integer d) {
    // a,b are a pair of integers
    // a, b can have addition of the two elements in any order
    // so a, b can be a+b, b or a, a+b
    // if a second set of integers are introduced, would any operation on the first set be equal to the second set given
    // think of it as on a grid and you want to sink the battleship and you have a certain range of coordinates that you can move 
    // key, value pair
    // linked list?
    // no negative numbers
    // return yes or no depending on if it is possilbe or not
    pairs.addLast(new Pair<Integer, Integer>(a,b));
    while(!pairs.isEmpty())
        {
            Pair<Integer, Integer>pair = pairs.poll();
            Integer key = pair.getKey();
            Integer value = pair.getValue();
            if(key.equals(c) && value.equals(d))
                {
                    return "Yes";
                }
            int sum=key+value;
            if (sum<=c)
                {
                    pairs.addLast(new Pair<Integer, Integer>(sum, value));
                }
            if (sum<=d)
                {
                    pairs.addLast(new Pair<Integer, Integer>(key,sum));
                }
        }

    }

}