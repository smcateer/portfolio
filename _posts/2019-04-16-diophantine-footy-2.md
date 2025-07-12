---
title: "Diophantine footy 2: generalised footy"
date: 2019-07-25
permalink: diophantine-footy-2/
published: true
categories:
  - personal project
tags: [ "footy", "australian rules football", "maths", "diophantine equations", ]
---

BTW, this is a follow up to [diophantine footy](https://smcateer.github.io/portfolio/diophantine-footy/) ... read that first for context.

So I was thinking about what would happen if a goal was worth an arbitrary number of points $p$ (rather than 6) - the number of solutions for \\(p = 6\\) struck me as a bit high. So I scratched together the following bit of Python to count solutions. (NB, we are not counting the 0.0 (0) solution here, but it's a solution for any value of \\(p\\)).

``` python
# we want to consider a range of points per goal (p) (regular footy is 6)
for p in range(1,15):
    print('Points per goal: {:d}\n----'.format(p))
    # a counter for the solutions
    cnt = 0
    # number of goals
    for g in range(1,100):
        # number of points
        for b in range(1,100):
            # this is the condition we want to satisfy
            if b*g == b + p*g:
                cnt += 1
                print('Soln: {:d}.{:d} ({:d})'.format(g, b, g*b))
    print('Number of solns: {:d}\n'.format(cnt))
```

And here are the results:

| \\(p\\)             | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 |
| :---                |---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| number of solutions | 1  | 2  | 2  | 3  | 2  | 4  | 2  | 4  | 3  | 4  | 2  | 6  | 2  | 4  |


We now have two options. One, stare at the sequence and hope our brain clicks, or two, [to the OEIS!!!][1] (BTW, if you get too many results from the OEIS, just calculate more terms and search again). (BTW 2, if you ever generate a sequence that does not appear on the OEIS, submit it and go down in history).

The top hit in the OEIS was the number of divisors of \\(n\\), this is a great clue to what is going on.

Now we want to solve
\\[pg+b = bg\\]
where \\(p\\) is the points per goal, \\(g\\) is the number of goals and \\(b\\) is the number of behinds. Note that this is a generalized version of the equation from the previous post, where we now have \\(p\\) instead of 6. Rearranging, we get
\\[ \frac{pg}{g-1} = b\\]
and since \\(g-1\\) never divides \\(g\\) we get whole number values for \\(b\\) exactly when \\(g-1\\) divides \\(p\\) (we get all divisors of \\(p\\) because we are free to allow \\(g\\) and therefore \\(g-1\\) to range over all positive integers)

This is exactly the result we guessd by counting solutions (and running to the OEIS).

Let's look at a particular example, \\(p=10\\). That is, a version of footy where a goal is worth 10 points. The solutions are
* 2.20 (40)
* 3.15 (45)
* 6.12 (72)
* 11.11 (121)

The values of \\(g-1\\) here are 1, 2, 5, 10; exactly the divisors of 10.

[1]: https://oeis.org/search?q=1%2C+2%2C+2%2C+3%2C+2%2C+4%2C+2%2C+4%2C+3%2C+4%2C+2%2C+6%2C+2%2C+4&language=english&go=Search
