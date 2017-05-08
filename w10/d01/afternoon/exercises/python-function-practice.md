## Python Function Practice

Create the following functions

<details>
<summary>1. A recipe you are reading states how many grams you need for the ingredient. Unfortunately, your store only sells items in ounces. Create a function to convert grams to ounces.

`ounces = 28.3495231 * grams`
</summary>

```python
def grams_to_ounces(x):
	return 28.3495231 * x

grams = 10
ounces = grams_to_ounces(grams)
print ounces
```

</details>

<details>
<summary>
2. Read in a Fahrenheit temperature. Calculate and display the equivalent centigrade temperature. The following formula is used for the conversion:

`C = (5 / 9) * (F – 32)`
</summary>

```python
def f_to_c(f):
    return (5.0/9.0) * (f - 32)

f = 86
c = f_to_c(f)

print "{0} fahrenheit is {1} centigrade".format(f, c)
```

</details>

<details>
<summary>
3. Calculate the amount obtained by investing the principal (P) for (N) years at the rate of (R). The following formula is used for the conversion:

`A = P * (1 + R) ^ N`
</summary>

```python
def compound_interest(p, r, n):
    return p * (1 + r) ** n

principal = 1000
rate = 0.1
years = 2

interest = compound_interest(principal, rate, years)

print interest
```

</details>

<details>
<summary>
Bonus

Write a program to solve a classic puzzle:
We count 35 heads and 94 legs among the chickens and rabbits in a farm. How many rabbits and how many chickens do we have?

Hint: Use a `for` loop to iterate all possible solutions.
</summary>

```python
def solve(numheads, numlegs):
    ns = 'No solutions!'
    for i in range(numheads + 1):
        j = numheads - i
        if 2 * i + 4 * j == numlegs:
            return i, j
    return ns,ns

numheads = 35
numlegs = 94
solutions = solve(numheads, numlegs)
print solutions
```

</details>
