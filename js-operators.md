### 1. Arithmetic Operators
**These operators are used for performing mathematical calculations.**

- + (Addition): Adds two numbers or concatenates two strings.
- - (Subtraction): Subtracts one number from another.
- * (Multiplication): Multiplies two numbers.
- / (Division): Divides one number by another.
- % (Modulus): Returns the remainder of division.
- ** (Exponentiation): Raises a number to a power (e.g., 2 ** 3 results in 8).
- ++ (Increment): Increases the value of a variable by one.
- -- (Decrement): Decreases the value of a variable by one.


### 2. Assignment Operators
**These operators are used to assign values to variables.**

- = (Assignment): Assigns a value to a variable (e.g., x = 5).
- += (Addition Assignment): Adds a value to a variable and assigns the result (e.g., x += 5).
- -= (Subtraction Assignment): Subtracts a value from a variable and assigns the result.
- *= (Multiplication Assignment): Multiplies a variable by a value and assigns the result.
- /= (Division Assignment): Divides a variable by a value and assigns the result.
- %= (Modulus Assignment): Assigns the remainder of the division of a variable by a value.

### 3. Comparison Operators
**These operators are used to compare values.**

- == (Equality): Compares two values for equality after type conversion.
- === (Strict Equality): Compares two values for equality without type conversion.
- != (Inequality): Checks if two values are not equal (with type conversion).
- !== (Strict Inequality): Checks if two values are not equal (without type conversion).
> (Greater Than): Checks if one value is greater than another.
< (Less Than): Checks if one value is less than another.
>= (Greater Than or Equal To): Checks if one value is greater than or equal to another.
<= (Less Than or Equal To): Checks if one value is less than or equal to another.


### 4. Logical Operators
**hese operators are used to perform logical operations.**

- && (Logical AND): Returns true if both operands are true.
- || (Logical OR): Returns true if at least one operand is true.
- ! (Logical NOT): Inverts the truthiness of a value (e.g., !true results in false).

### 5. Bitwise Operators
**These operators work on the binary representation of numbers.**

& (Bitwise AND): Performs a bitwise AND on two numbers.
| (Bitwise OR): Performs a bitwise OR on two numbers.
^ (Bitwise XOR): Performs a bitwise XOR (exclusive OR) on two numbers.
~ (Bitwise NOT): Inverts all the bits of a number.
<< (Left Shift): Shifts the bits of a number to the left.
>> (Right Shift): Shifts the bits of a number to the right, preserving the sign.
>>> (Unsigned Right Shift): Shifts the bits of a number to the right, ignoring the sign.


### 6. String Operators
**These operators are used to work with strings.**

+ (Concatenation): Joins two strings together (e.g., "Hello " + "World" results in "Hello World").
+= (Concatenation Assignment): Adds a string to an existing string variable.

### 7. Conditional (Ternary) Operator
**Used for conditional execution of expressions.**

condition ? expr1 : expr2: Returns expr1 if the condition is true, otherwise returns expr2.


### 8. Comma Operator
**Allows multiple expressions to be evaluated, returning the result of the last one.**

,: Evaluates expressions from left to right and returns the result of the last expression.


### 9. Type Operators (typeof and instanceof)
**These operators are used to check the type of a variable or object.**

typeof: Returns a string indicating the type of a variable (e.g., typeof 42 returns "number").
instanceof: Checks if an object is an instance of a specific class or constructor function.


### 10. delete Operator
**Deletes a property from an object.**

delete obj.property: Removes a property from an object (e.g., delete obj.name).


### 11. in Operator
**Checks if a property exists in an object.**

property in obj: Returns true if the property exists in the object.


### 12. void Operator
**Evaluates an expression and returns undefined.**

void(expression): Ignores the result of the expression and returns undefined.


### 13. Spread (...) Operator
**Used for expanding arrays and objects.**

... (Spread Operator): Expands an array or object (e.g., [...arr] copies the array arr).


### 14. new Operator
**Creates a new instance of an object using a constructor.**

new: Used to create instances of objects (e.g., new Object()).


### 15. this Operator
**Refers to the current execution context.**

this: Refers to the current object in the execution context.


### 16. super Operator
**Used to call methods from a parent class in subclasses.**

super: Calls methods from a parent class (e.g., super.method()).


### 17. Grouping Operator
**Used to group expressions and change the precedence of operations.**

( ): Groups expressions (e.g., (2 + 3) * 4).


## Dynamic Typing in JavaScript.

   Dynamic typing means that the type of a variable in a programming language is determined automatically at runtime, rather than being explicitly set at compile time. In JavaScript, a variable can change its type depending on the value assigned to it. For example, a variable can be assigned a string value and later be reassigned to a number, and JavaScript will handle the type change automatically.

   ### Example of Dynamic Typing:

   ``` let data = "Hello, World!";  // The variable 'data' contains a string
        console.log(typeof data);    // Output: "string"
 
        data = 42;  // Now, the variable 'data' contains a number
        console.log(typeof data);    // Output: "number"

        data = true;  // Now, the variable 'data' contains a boolean value
        console.log(typeof data);    // Output: "boolean" ```

    
