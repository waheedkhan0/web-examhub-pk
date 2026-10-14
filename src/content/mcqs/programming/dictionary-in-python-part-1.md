---
title: Dictionary In Python — Part 1 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Dictionary In Python — Part 1 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: dictionary-in-python-part-1
topicName: Dictionary In Python — Part 1
author: ExamHub Academic Editorial Board
updatedDate: "2026-10-14"
difficulty: Exam-Level
targetExams:
  - FPSC
  - PPSC
  - NTS
  - NITB
  - PTS
questions:
  - id: 1
    question: What is the purpose of the popitem() method for dictionaries?
    options:
      - Removes and returns the last key-value pair in the dictionary
      - Removes and returns a random key-value pair from the dictionary
      - Removes and returns the first key-value pair in the dictionary
      - Removes and returns the specified key-value pair from the dictionary
    answer: 1
    explanation: Imagine a dictionary as a box filled with labeled items. Each label is a key , and the item is its value . The popitem() method acts like taking out one item from that box. But which item does it take? It's important to understand that unlike lists, dictionaries don't have a strict "first" or "last" item. Option A says it removes the last item. This is not entirely accurate because dictionaries aren't ordered like lists. Option B says it's random. This is also incorrect. While the order might seem random, it's actually determined by how Python stores the data internally; it's not truly random selection. Option C suggests it removes the first. Again, dictionaries don't have a defined "first" element. Option B is the closest, but not entirely precise. It removes and returns an arbitrary key-value pair. In Python versions before 3.7, the order might appear random. In Python 3.7+, the order is insertion order, but popitem() still removes an arbitrary key-value pair (it's still efficient for removing and retrieving any single element). Option D is incorrect; there's a different method ( pop() ) for removing a specific key-value pair. popitem() always removes any key-value pair, not one you specify. Therefore, the most accurate description among the choices is that popitem() removes and returns an arbitrary key-value pair from the dictionary. The exact order is implementation-defined but usually reflects insertion order in newer versions of Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: "What is the output of the following code: my_dict = {'a': 1, 'b': 2} my_dict.popitem() print(my_dict)"
    options:
      - "{'a': 1, 'b': 2}"
      - "{}"
      - "{'b': 2}"
      - "{1: 'a', 2: 'b'}"
    answer: 2
    explanation: "Code Analysis: my_dict = {'a': 1, 'b': 2} 1. popitem() Method: The popitem() method removes and returns the last inserted key-value pair. In this case, the last inserted pair is 'b': 2 . 2. Updated Dictionary: After removing 'b': 2 , the dictionary will contain only 'a': 1 . print(my_dict) Output: The dictionary now contains {'a': 1} . Incorrect Options: A) {'a': 1, 'b': 2}: This would be the original dictionary, but popitem() modifies it. B) {}: This would be true if both key-value pairs were removed, but only one is removed. D) {1: 'a', 2: 'b'}: This is incorrect as keys and values are not swapped. Thus, the correct answer is Option C: {'a': 1} ."
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which of the following data types in Python is used to store key-value pairs?
    options:
      - Dictionary
      - List
      - Tuple
      - Set
    answer: 0
    explanation: Dictionary is the correct answer to “Which of the following data types in Python is used to store key-value pairs”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What method is used to check if a key exists in a dictionary, and if not, add it with a default value?
    options:
      - setdefault()
      - addkey()
      - insert()
      - newkey()
    answer: 0
    explanation: setdefault() is the correct answer to “What method is used to check if a key exists in a dictionary, and if not, add it with a default value”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: What does the len() function do when applied to a dictionary?
    options:
      - Returns the number of key-value pairs in the dictionary
      - Returns the sum of all values
      - Returns the length of the longest key
      - Returns the length of the longest value
    answer: 0
    explanation: Returns the number of key-value pairs in the dictionary is the correct answer to “What does the len() function do when applied to a dictionary”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: In Python, how can you get a list of all key-value pairs in a dictionary?
    options:
      - items()
      - get_items()
      - all_items()
      - list_items()
    answer: 0
    explanation: items() is the correct answer to “In Python, how can you get a list of all key-value pairs in a dictionary”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: What is the purpose of the dict() constructor in Python?
    options:
      - Creates a new dictionary
      - Converts a list to a dictionary
      - Converts a tuple to a dictionary
      - Converts a string to a dictionary
    answer: 0
    explanation: Creates a new dictionary is the correct answer to “What is the purpose of the dict() constructor in Python”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which method is used to remove a key-value pair from a dictionary?
    options:
      - pop()
      - remove()
      - delete()
      - discard()
    answer: 0
    explanation: pop() is the correct answer to “Which method is used to remove a key-value pair from a dictionary”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: In Python, how can you check if a key exists in a dictionary?
    options:
      - in keyword
      - exists()
      - contains()
      - check()
    answer: 0
    explanation: in keyword is the correct answer to “In Python, how can you check if a key exists in a dictionary”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What method is used to update the values of a dictionary with the values from another dictionary?
    options:
      - update()
      - set()
      - add()
      - merge()
    answer: 0
    explanation: update() is the correct answer to “What method is used to update the values of a dictionary with the values from another dictionary”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: What is the purpose of the keys() method for dictionaries?
    options:
      - Returns a list of all keys in the dictionary
      - Returns a list of all values in the dictionary
      - Returns a list of all items in the dictionary
      - Returns a list of all keys and values in the dictionary
    answer: 0
    explanation: Returns a list of all keys in the dictionary is the correct answer to “What is the purpose of the keys() method for dictionaries”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: Which method is used to get a list of all values in a dictionary?
    options:
      - values()
      - get_values()
      - all_values()
      - list_values()
    answer: 0
    explanation: values() is the correct answer to “Which method is used to get a list of all values in a dictionary”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: In Python, how can you remove all key-value pairs from a dictionary?
    options:
      - clear()
      - remove_all()
      - delete_all()
      - discard_all()
    answer: 0
    explanation: clear() is the correct answer to “In Python, how can you remove all key-value pairs from a dictionary”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What is the purpose of the items() method for dictionaries?
    options:
      - Returns a list of key-value pairs in the dictionary
      - Returns a list of keys in the dictionary
      - Returns a list of values in the dictionary
      - Returns a list of items in the dictionary
    answer: 0
    explanation: Returns a list of key-value pairs in the dictionary is the correct answer to “What is the purpose of the items() method for dictionaries”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: Which method is used to create a shallow copy of a dictionary?
    options:
      - copy()
      - clone()
      - duplicate()
      - replicate()
    answer: 0
    explanation: copy() is the correct answer to “Which method is used to create a shallow copy of a dictionary”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: What is the purpose of the clear() method for dictionaries?
    options:
      - Removes all key-value pairs from the dictionary
      - Adds a key-value pair to the dictionary
      - Removes the last key-value pair
      - Deletes the dictionary
    answer: 0
    explanation: Removes all key-value pairs from the dictionary is the correct answer to “What is the purpose of the clear() method for dictionaries”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: What is the purpose of the fromkeys() method for dictionaries?
    options:
      - Creates a new dictionary with specified keys and a default value
      - Adds new keys to the dictionary
      - Copies keys and values from another dictionary
      - Removes specified keys from the dictionary
    answer: 0
    explanation: Creates a new dictionary with specified keys and a default value is the correct answer to “What is the purpose of the fromkeys() method for dictionaries”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: In Python, how can you get a list of all keys in a dictionary?
    options:
      - keys()
      - get_keys()
      - all_keys()
      - list_keys()
    answer: 0
    explanation: keys() is the correct answer to “In Python, how can you get a list of all keys in a dictionary”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: "What is the output of the following code: my_dict = {'a': 1, 'b': 2} print(my_dict['a'])"
    options:
      - "1"
      - a
      - "{'a': 1}"
      - "'a'"
    answer: 0
    explanation: "1 is the correct answer to “What is the output of the following code: my_dict = {'a': 1, 'b': 2} print(my_dict['a'])”. This question is standard in competitive examination syllabi for Dictionary In Python."
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: How can you add a new key-value pair to a dictionary in Python?
    options:
      - my_dict['new_key'] = new_value
      - add('new_key', new_value)
      - insert('new_key', new_value)
      - append('new_key', new_value)
    answer: 0
    explanation: my_dict['new_key'] = new_value is the correct answer to “How can you add a new key-value pair to a dictionary in Python”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: In Python, how can you create an empty dictionary?
    options:
      - dict()
      - "{}"
      - empty_dict()
      - new_dict()
    answer: 0
    explanation: dict() is the correct answer to “In Python, how can you create an empty dictionary”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: What is the purpose of the values() method for dictionaries?
    options:
      - Returns a list of all values in the dictionary
      - Returns a list of all keys in the dictionary
      - Returns a list of key-value pairs in the dictionary
      - Returns a list of items in the dictionary
    answer: 0
    explanation: Returns a list of all values in the dictionary is the correct answer to “What is the purpose of the values() method for dictionaries”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: "What will be the output of the following code: my_dict = {'a': 1, 'b': 2} my_dict['c'] = 3 print(my_dict)"
    options:
      - "{'a': 1, 'b': 2}"
      - "{'a': 1, 'b': 2, 'c': 3}"
      - "{'c': 3}"
      - None of the above
    answer: 1
    explanation: "{'a': 1, 'b': 2, 'c': 3} is the correct answer to “What will be the output of the following code: my_dict = {'a': 1, 'b': 2} my_dict['c'] = 3 print(my_dict)”. This question is standard in competitive examination syllabi for Dictionary In Python."
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: "What is the output of the following code: my_dict = {'a': 1, 'b': 2, 'c': 3} my_dict.pop('b') print(my_dict)"
    options:
      - "{'a': 1, 'b': 2, 'c': 3}"
      - "{'a': 1, 'c': 3}"
      - "{'a': 1, 'b': 2}"
      - "{'c': 3}"
    answer: 1
    explanation: "{'a': 1, 'c': 3} is the correct answer to “What is the output of the following code: my_dict = {'a': 1, 'b': 2, 'c': 3} my_dict.pop('b') print(my_dict)”. This question is standard in competitive examination syllabi for Dictionary In Python."
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: "What is the output of the following code: my_dict = {'a': 1, 'b': 2, 'c': 3} print(my_dict.get('d', 0))"
    options:
      - "0"
      - "'d'"
      - "3"
      - "'a'"
    answer: 0
    explanation: "0 is the correct answer to “What is the output of the following code: my_dict = {'a': 1, 'b': 2, 'c': 3} print(my_dict.get('d', 0))”. This question is standard in competitive examination syllabi for Dictionary In Python."
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: "What is the output of the following code: my_dict = {'a': 1, 'b': 2, 'c': 3} my_dict.values() print(my_dict)"
    options:
      - "{'a': 1, 'b': 2, 'c': 3}"
      - "[1, 2, 3]"
      - "{1, 2, 3}"
      - "{'values': [1, 2, 3]}"
    answer: 0
    explanation: "{'a': 1, 'b': 2, 'c': 3} is the correct answer to “What is the output of the following code: my_dict = {'a': 1, 'b': 2, 'c': 3} my_dict.values() print(my_dict)”. This question is standard in competitive examination syllabi for Dictionary In Python."
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: "What will be the output of the following code: my_dict = {'a': 1, 'b': 2, 'c': 3} my_dict.items() print(my_dict)"
    options:
      - "{'a': 1, 'b': 2, 'c': 3}"
      - "[('a', 1), ('b', 2), ('c', 3)]"
      - "{('a': 1), ('b': 2), ('c': 3)}"
      - "{'items': [('a', 1), ('b', 2), ('c', 3)]}"
    answer: 0
    explanation: "{'a': 1, 'b': 2, 'c': 3} is the correct answer to “What will be the output of the following code: my_dict = {'a': 1, 'b': 2, 'c': 3} my_dict.items() print(my_dict)”. This question is standard in competitive examination syllabi for Dictionary In Python."
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: "What is the output of the following code: my_dict = {'a': 1, 'b': 2} del my_dict['b'] print(my_dict)"
    options:
      - "{'a': 1, 'b': 2}"
      - "{'a': 1}"
      - "{'b': 2}"
      - "{}"
    answer: 1
    explanation: "{'a': 1} is the correct answer to “What is the output of the following code: my_dict = {'a': 1, 'b': 2} del my_dict['b'] print(my_dict)”. This question is standard in competitive examination syllabi for Dictionary In Python."
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: "What is the output of the following code: my_dict = {'a': 1, 'b': 2} new_dict = my_dict.copy() print(new_dict)"
    options:
      - "{'a': 1, 'b': 2}"
      - "{'a': 1, 'b': 2, 'a': 1, 'b': 2}"
      - "{'a': 1, 'b': 2, 'a': 2, 'b': 1}"
      - "{'a': 2, 'b': 1}"
    answer: 0
    explanation: "{'a': 1, 'b': 2} is the correct answer to “What is the output of the following code: my_dict = {'a': 1, 'b': 2} new_dict = my_dict.copy() print(new_dict)”. This question is standard in competitive examination syllabi for Dictionary In Python."
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: "What will be the output of the following code: keys = ['a', 'b', 'c'] values = 0 my_dict = dict.fromkeys(keys, values) print(my_dict)"
    options:
      - "{'a': 0, 'b': 0, 'c': 0}"
      - "{'a': [0], 'b': [0], 'c': [0]}"
      - "{0: ['a', 'b', 'c']}"
      - "{'a': 'b', 'b': 'c', 'c': 0}"
    answer: 0
    explanation: "{'a': 0, 'b': 0, 'c': 0} is the correct answer to “What will be the output of the following code: keys = ['a', 'b', 'c'] values = 0 my_dict = dict.fromkeys(keys, values) print(my_dict)”. This question is standard in competitive examination syllabi for Dictionary In Python."
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: What will be the output of the following Python code? >>> import collections >>> a=collections.OrderedDict((str(x),x) for x in range(3)) >>> a
    options:
      - "{'2':2, '0':0, '1':1}"
      - OrderedDict([('0', 0), ('1', 1), ('2', 2)])
      - An exception is thrown
      - "' '"
    answer: 1
    explanation: OrderedDict([('0', 0), ('1', 1), ('2', 2)]) is the correct answer to “What will be the output of the following Python code? >>> import collections >>> a=collections.OrderedDict((str(x),x) for x in range(3)) >>> a”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: What will be the output of the following Python code? >>> a={} >>> a.fromkeys([1,2,3],"check")
    options:
      - Syntax error
      - "{1:\"check\",2:\"check\",3:\"check\"}"
      - "\"check\""
      - "{1:None,2:None,3:None}"
    answer: 1
    explanation: "{1:\"check\",2:\"check\",3:\"check\"} is the correct answer to “What will be the output of the following Python code? >>> a={} >>> a.fromkeys([1,2,3],\"check\")”. This question is standard in competitive examination syllabi for Dictionary In Python."
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What will be the output of the following Python code snippet? d1 = {"john":40, "peter":45} d2 = {"john":466, "peter":45} d1 == d2
    options:
      - "True"
      - "False"
      - None
      - Error
    answer: 1
    explanation: False is the correct answer to “What will be the output of the following Python code snippet? d1 = {"john":40, "peter":45} d2 = {"john":466, "peter":45} d1 == d2”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: What will be the output of the following Python code snippet? d = {"john":40, "peter":45} print(list(d.keys()))
    options:
      - "[\"john\", \"peter\"]"
      - "[\"john\":40, \"peter\":45]"
      - ("john", "peter")
      - ("john":40, "peter":45)
    answer: 0
    explanation: "[\"john\", \"peter\"] is the correct answer to “What will be the output of the following Python code snippet? d = {\"john\":40, \"peter\":45} print(list(d.keys()))”. This question is standard in competitive examination syllabi for Dictionary In Python."
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: What will be the output of the following Python code snippet? test = {1:'A', 2:'B', 3:'C'} test = {} print(len(test))
    options:
      - "0"
      - None
      - "3"
      - An exception is thrown
    answer: 0
    explanation: 0 is the correct answer to “What will be the output of the following Python code snippet? test = {1:'A', 2:'B', 3:'C'} test = {} print(len(test))”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: Which of the following statements create a dictionary?
    options:
      - d = {}
      - d = {"john":40, "peter":45}
      - d = {40:"john", 45:"peter"}
      - All of the mentioned
    answer: 3
    explanation: All of the mentioned is the correct answer to “Which of the following statements create a dictionary”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: "What will be the output of the following Python code snippet? a={1:\"A\",2:\"B\",3:\"C\"} for i,j in a.items(): print(i,j,end=\" \")"
    options:
      - 1 A 2 B 3 C
      - 1 2 3
      - A B C
      - 1:"A" 2:"B" 3:"C"
    answer: 0
    explanation: "1 A 2 B 3 C is the correct answer to “What will be the output of the following Python code snippet? a={1:\"A\",2:\"B\",3:\"C\"} for i,j in a.items(): print(i,j,end=\" \")”. This question is standard in competitive examination syllabi for Dictionary In Python."
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: What will be the output of the following Python code snippet? test = {1:'A', 2:'B', 3:'C'} del test[1] test[1] = 'D' del test[2] print(len(test))
    options:
      - "0"
      - "2"
      - Error as the key-value pair of 1:'A' is already deleted
      - "1"
    answer: 1
    explanation: 2 is the correct answer to “What will be the output of the following Python code snippet? test = {1:'A', 2:'B', 3:'C'} del test[1] test[1] = 'D' del test[2] print(len(test))”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: What will be the output of the following Python code? >>> a={1:"A",2:"B",3:"C"} >>> a.items()
    options:
      - Syntax error
      - dict_items([('A'), ('B'), ('C')])
      - dict_items([(1,2,3)])
      - dict_items([(1, 'A'), (2, 'B'), (3, 'C')])
    answer: 3
    explanation: dict_items([(1, 'A'), (2, 'B'), (3, 'C')]) is the correct answer to “What will be the output of the following Python code? >>> a={1:"A",2:"B",3:"C"} >>> a.items()”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: Which of the statements about dictionary values if false?
    options:
      - More than one key can have the same value
      - The values of the dictionary can be accessed as dict[key]
      - Values of a dictionary must be unique
      - Values of a dictionary can be a mixture of letters and numbers
    answer: 2
    explanation: Values of a dictionary must be unique is the correct answer to “Which of the statements about dictionary values if false”. This question is standard in competitive examination syllabi for Dictionary In Python.
    keyConcept: Dictionary In Python
    testedIn:
      - FPSC
      - PPSC
---


