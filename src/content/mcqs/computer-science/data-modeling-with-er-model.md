---
title: Data Modeling With Er Model MCQs with Explanations
description: Practice high-yield Computer Science & IT MCQs on Data Modeling With Er Model with worked academic solutions for PPSC, FPSC, CSS, PMS, NTS.
subject: computer-science
subjectName: Computer Science & IT
topic: data-modeling-with-er-model
topicName: Data Modeling With Er Model
author: ExamHub Academic Editorial Board
updatedDate: "2026-10-14"
difficulty: Exam-Level
targetExams:
  - PPSC
  - FPSC
  - CSS
  - PMS
  - NTS
questions:
  - id: 1
    question: Which of the following indicates the maximum number of entities that can be involved in a relationship?
    options:
      - Minimum cardinality
      - Maximum cardinality
      - ERD
      - Greater Entity Count (GEC)
    answer: 1
    explanation: "Option A: Minimum cardinality Minimum cardinality defines the least number of entities that must participate in a relationship. It typically specifies the mandatory aspect of a relationship. For instance, in an employee-manager relationship, a department may need at least one manager. Option B: Maximum cardinality Maximum cardinality indicates the upper limit on the number of entities that can participate in a relationship. It specifies the maximum number of instances an entity can be associated with another entity in a relationship. For example, in a one-to-many relationship, the maximum cardinality would denote the \"many\" side of the relationship. Option C: ERD ERD stands for Entity-Relationship Diagram, which is a graphical representation of entities and their relationships. While ERDs visually display cardinality, they are not the direct indicators of the maximum number of entities in a relationship. Option D: Greater Entity Count (GEC) This option is not a standard term in data modeling or the ER model. It does not pertain to defining the number of entities involved in a relationship. Conclusion: The correct answer is Option B: Maximum cardinality because it directly specifies the maximum number of entities that can be involved in a relationship."
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 2
    question: Which type of entity cannot exist in the database unless another type of entity also exists in the database, but does not require that the identifier of that other entity be included as part of its own identifier?
    options:
      - Weak entity
      - Strong entity
      - ID-dependent entity
      - ID- independent entity
    answer: 3
    explanation: "Option A: Weak entity A weak entity is an entity that cannot exist in the database unless it is associated with a strong entity. However, it typically requires the identifier of the associated strong entity to form its own identifier, making this option incorrect for the given question. Option B: Strong entity A strong entity is an entity that can exist independently in the database without relying on any other entity. Since the question specifies dependency on another entity, this option does not fit the criteria. Option C: ID-dependent entity An ID-dependent entity requires the identifier of another entity as part of its own identifier. This does not align with the condition in the question where the dependent entity does not require the identifier of the associated entity. Option D: ID-independent entity An ID-independent entity cannot exist in the database unless another type of entity exists, but it does not require the identifier of the associated entity to be part of its own identifier. This perfectly matches the criteria described in the question. Conclusion: The correct answer is Option D: ID-independent entity because it satisfies the condition of dependency without including the identifier of the related entity in its own identifier."
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 3
    question: In a one-to-many relationship, the entity that is on the one side of the relationship is called a(n) ________ entity.
    options:
      - parent
      - child
      - instance
      - subtype
    answer: 0
    explanation: "Option A: Parent In a one-to-many relationship, the entity on the one side of the relationship is typically referred to as the \"parent\" entity. It acts as the primary entity that relates to multiple entities on the \"many\" side. For example, in a department-employee relationship, the department is the parent entity. Option B: Child The \"child\" entity is on the \"many\" side of the relationship in a one-to-many relationship. It depends on the parent entity and can have multiple instances associated with a single instance of the parent entity. This does not apply to the entity on the one side. Option C: Instance An \"instance\" refers to a single occurrence of an entity, not the classification of an entity within a relationship. Therefore, it is not relevant to identifying the role of the entity on the one side of the relationship. Option D: Subtype A \"subtype\" is used in an entity-relationship model to represent specialized versions of a general entity (supertype). It is unrelated to the roles in a one-to-many relationship. Conclusion: The correct answer is Option A: Parent because the entity on the one side of a one-to-many relationship is referred to as the parent entity."
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 4
    question: A ternary relationship is so called because in contains two entities and one association between them.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: The statement is False . A ternary relationship involves three entities participating in a relationship. It's not limited to two entities and one association. The 'ternary' prefix indicates the involvement of three components, in this case, three entities.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 5
    question: A minimum cardinality is the minimum number of entity instances that may participate in a relationship instance.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "In the context of data modeling with the Entity-Relationship (ER) model, minimum cardinality refers to the minimum number of entity instances that must participate in a relationship instance. It defines the minimum requirement for participation in a relationship. For example, in a \"Customer\" and \"Order\" relationship where a customer may place zero or more orders, the minimum cardinality on the \"Order\" side would be zero , indicating that a customer can exist without placing any orders. Conversely, if there was a requirement that every customer must place at least one order, the minimum cardinality on the \"Order\" side would be one , indicating that every customer must have at least one associated order. Therefore, the statement that Option A: True is correct because the minimum cardinality indeed represents the minimum number of entity instances that may participate in a relationship instance."
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 6
    question: When designing a database, first identify the entities, then determine the attributes, and finally establish the relationships.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: "The answer is A: True . Here's why: Think of building a house: 1. First, you decide what rooms you need (entities) - like kitchen, bedroom, bathroom. 2. Then, you decide what each room will have (attributes) - like kitchen has a sink, stove, refrigerator. Bedroom has a bed, wardrobe. 3. Finally, you decide how the rooms connect (relationships) - like the kitchen is next to the dining room, the bedroom is upstairs. Similarly, in database design: * Entities are like the main objects you want to store information about (e.g., Customer, Product, Order). * Attributes are the properties of those objects (e.g., Customer has Name, Address, Phone Number). * Relationships show how these objects relate to each other (e.g., a Customer places an Order). So, identifying entities, then attributes, then relationships is a fundamental and correct approach in database design using ER models."
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 7
    question: Which type of entity represents an actual occurrence of an associated generalized entity?
    options:
      - Supertype entity
      - Subtype entity
      - Archetype entity
      - Instance entity
    answer: 3
    explanation: Instance entity is the correct answer to “Which type of entity represents an actual occurrence of an associated generalized entity”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 8
    question: A recursive relationship is a relationship between an entity and ________ .
    options:
      - itself
      - a subtype entity
      - an archetype entity
      - an instance entity
    answer: 0
    explanation: itself is the correct answer to “A recursive relationship is a relationship between an entity and ________ .”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 9
    question: Which of the following indicates the minimum number of entities that must be involved in a relationship?
    options:
      - Minimum cardinality
      - Maximum cardinality
      - ERD
      - Greater Entity Count (GEC)
    answer: 0
    explanation: Minimum cardinality is the correct answer to “Which of the following indicates the minimum number of entities that must be involved in a relationship”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 10
    question: Which of the following refers to something that can be identified in the user's work environment, something that the users want to track?
    options:
      - Entity
      - Attribute
      - Identifier
      - Relationship
    answer: 0
    explanation: Entity is the correct answer to “Which of the following refers to something that can be identified in the user's work environment, something that the users want to track”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 11
    question: In which of the following is a single-entity instance of one type related to many entity instances of another type?
    options:
      - One-to-One Relationship
      - One-to-Many Relationship
      - Many-to-Many Relationship
      - Composite Relationship
    answer: 1
    explanation: One-to-Many Relationship is the correct answer to “In which of the following is a single-entity instance of one type related to many entity instances of another type”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 12
    question: Which of the following refers to an entity in which the identifier of one entity includes the identifier of another entity?
    options:
      - Weak entity
      - Strong entity
      - ID-dependent entity
      - ID-independent entity
    answer: 2
    explanation: ID-dependent entity is the correct answer to “Which of the following refers to an entity in which the identifier of one entity includes the identifier of another entity”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 13
    question: Which type of entity is related to two or more associated entities that each contain specialized attributes that apply to some but not all of the instances of the entity?
    options:
      - Supertype entity
      - Subtype entity
      - Archetype entity
      - Instance entity
    answer: 0
    explanation: Supertype entity is the correct answer to “Which type of entity is related to two or more associated entities that each contain specialized attributes that apply to some but not all of the instances of the entity”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 14
    question: "An attribute that names or identifies entity instances is a(n):"
    options:
      - entity.
      - attribute.
      - identifier.
      - relationship.
    answer: 2
    explanation: identifier. is the correct answer to “An attribute that names or identifies entity instances is a(n):”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 15
    question: "Properties that describe the characteristics of entities are called:"
    options:
      - entities.
      - attributes.
      - identifiers.
      - relationships.
    answer: 1
    explanation: attributes. is the correct answer to “Properties that describe the characteristics of entities are called:”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 16
    question: In which of the following can many entity instances of one type be related to many entity instances of another type?
    options:
      - One-to-One Relationship
      - One-to-Many Relationship
      - Many-to-Many Relationship
      - Composite Relationship
    answer: 2
    explanation: Many-to-Many Relationship is the correct answer to “In which of the following can many entity instances of one type be related to many entity instances of another type”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 17
    question: "Entities of a given type are grouped into a(n):"
    options:
      - database.
      - entity class.
      - attribute.
      - ERD.
    answer: 1
    explanation: entity class. is the correct answer to “Entities of a given type are grouped into a(n):”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 18
    question: Which of the following is NOT a basic element of all versions of the E-R model?
    options:
      - Entities
      - Attributes
      - Relationships
      - Primary keys
    answer: 3
    explanation: Primary keys is the correct answer to “Which of the following is NOT a basic element of all versions of the E-R model”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 19
    question: In which of the following is a single-entity instance of one type of related to a single-entity instance of another type?
    options:
      - One-to-One Relationship
      - One-to-Many Relationship
      - Many-to-Many Relationship
      - Composite Relationship
    answer: 0
    explanation: One-to-One Relationship is the correct answer to “In which of the following is a single-entity instance of one type of related to a single-entity instance of another type”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 20
    question: Entities can be associated with one another in which of the following?
    options:
      - Entities
      - Attributes
      - Identifiers
      - Relationships
    answer: 3
    explanation: Relationships is the correct answer to “Entities can be associated with one another in which of the following”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 21
    question: Which type of entity has its relationship to another entity determined by an attribute in that other entity called a discriminator?
    options:
      - Supertype entity
      - Subtype entity
      - Archetype entity
      - Instance entity
    answer: 1
    explanation: Subtype entity is the correct answer to “Which type of entity has its relationship to another entity determined by an attribute in that other entity called a discriminator”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 22
    question: Which type of entity represents a logical generalization whose actual occurrence is represented by a second, associated entity?
    options:
      - Supertype entity
      - Subtype entity
      - Archetype entity
      - Instance entity
    answer: 2
    explanation: Archetype entity is the correct answer to “Which type of entity represents a logical generalization whose actual occurrence is represented by a second, associated entity”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 23
    question: In a one-to-many relationship, the entity that is on the many side of the relationship is called a(n) ________ entity.
    options:
      - parent
      - child
      - instance
      - subtype
    answer: 1
    explanation: child is the correct answer to “In a one-to-many relationship, the entity that is on the many side of the relationship is called a(n) ________ entity.”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 24
    question: An ID-dependent entity is an entity whose identifier is a composite identifier where no portion of the composite identifier is an identifier of another entity.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “An ID-dependent entity is an entity whose identifier is a composite identifier where no portion of the composite identifier is an identifier of another entity.”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 25
    question: All instances of an entity class have the same attributes.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “All instances of an entity class have the same attributes.”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 26
    question: An attribute describes the entity's characteristics.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “An attribute describes the entity's characteristics.”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 27
    question: The degree of a relationship refers to the number of entity classes in the relationship.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “The degree of a relationship refers to the number of entity classes in the relationship.”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 28
    question: Entities use identifiers while tables use keys.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Entities use identifiers while tables use keys.”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 29
    question: Composite identifiers consist of two or more attributes.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Composite identifiers consist of two or more attributes.”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 30
    question: A subtype entity is a special case of another entity called a supertype entity.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “A subtype entity is a special case of another entity called a supertype entity.”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 31
    question: An entity is something that can be identified in the user's work environment; something that the users want to track.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “An entity is something that can be identified in the user's work environment; something that the users want to track.”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 32
    question: Entity instances are associated by relationship classes.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “Entity instances are associated by relationship classes.”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 33
    question: 1:1, 1:N and N:M relationships are also known as HAS-A relationships.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “1:1, 1:N and N:M relationships are also known as HAS-A relationships.”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 34
    question: In a 1:N relationship, the parent is the entity on the one side of the relationship and the child is the entity on the N side of the relationship.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “In a 1:N relationship, the parent is the entity on the one side of the relationship and the child is the entity on the N side of the relationship.”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 35
    question: A maximum cardinality is the maximum number of entity instances that can participate in a relationship instance.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “A maximum cardinality is the maximum number of entity instances that can participate in a relationship instance.”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 36
    question: An entity class is a collection of entities and is described by the structure of the entities in that class.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “An entity class is a collection of entities and is described by the structure of the entities in that class.”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 37
    question: Relationship classes are associations between entity classes.
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “Relationship classes are associations between entity classes.”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 38
    question: An identifier typically uses more than one attribute.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “An identifier typically uses more than one attribute.”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 39
    question: An identifier determines the type of relationship that an entity has.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “An identifier determines the type of relationship that an entity has.”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
  - id: 40
    question: A recursive relationship is a relationship between an archetype and an instance of that archetype.
    options:
      - "True"
      - "False"
    answer: 1
    explanation: False is the correct answer to “A recursive relationship is a relationship between an archetype and an instance of that archetype.”. This question is standard in competitive examination syllabi for Data Modeling With Er Model.
    keyConcept: Data Modeling With Er Model
    testedIn:
      - PPSC
      - FPSC
---


