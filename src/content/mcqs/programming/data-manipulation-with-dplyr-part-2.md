---
title: Data Manipulation With Dplyr — Part 2 MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Data Manipulation With Dplyr — Part 2 with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: data-manipulation-with-dplyr-part-2
topicName: Data Manipulation With Dplyr — Part 2
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
    question: How do you rename a column named old_name to new_name in dplyr?
    options:
      - rename_column(old_name = new_name)
      - rename(columns = c("old_name" = "new_name"))
      - alter_column("old_name", "new_name")
      - rename(vars(old_name = new_name))
    answer: 3
    explanation: rename(vars(old_name = new_name)) is the correct answer to “How do you rename a column named old_name to new_name in dplyr”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: In dplyr, what is the purpose of the transmute() function?
    options:
      - Creates a new data frame with only the specified columns
      - Transforms the data frame structure
      - Mutates the data frame based on conditions
      - Transposes the data frame
    answer: 0
    explanation: Creates a new data frame with only the specified columns is the correct answer to “In dplyr, what is the purpose of the transmute() function”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: How do you calculate the percentage of total sales for each category in dplyr?
    options:
      - mutate(percentage_sales = sales / sum(sales) * 100)
      - calculate_percentage(sales)
      - summarize(percentage = sum(sales) / total_sales * 100)
      - percent_of_total(sales)
    answer: 0
    explanation: mutate(percentage_sales = sales / sum(sales) * 100) is the correct answer to “How do you calculate the percentage of total sales for each category in dplyr”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: What is the purpose of the pivot_longer() function in dplyr?
    options:
      - Transforms wide data to long format
      - Transposes rows and columns
      - Expands the data frame horizontally
      - Unpivots the data frame
    answer: 0
    explanation: Transforms wide data to long format is the correct answer to “What is the purpose of the pivot_longer() function in dplyr”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: How do you filter rows where a specific variable is not equal to a given value using filter() in dplyr?
    options:
      - filter(variable != value)
      - filter(not_equal(variable, value))
      - filter(variable <> value)
      - filter(variable not in value)
    answer: 0
    explanation: filter(variable != value) is the correct answer to “How do you filter rows where a specific variable is not equal to a given value using filter() in dplyr”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which of the following is a plot to investigate the order in which observations were recorded?
    options:
      - ggplot
      - ggsave
      - ggpcp
      - ggorder
    answer: 3
    explanation: ggorder is the correct answer to “Which of the following is a plot to investigate the order in which observations were recorded”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which of the following creates fluctuation plot?
    options:
      - ggmissplot
      - ggmissing
      - ggfluctuation
      - ggpcp
    answer: 1
    explanation: ggmissing is the correct answer to “Which of the following creates fluctuation plot”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: How many functions exist for wrangling the data with dplyr package?
    options:
      - one
      - seven
      - three
      - five
    answer: 1
    explanation: seven is the correct answer to “How many functions exist for wrangling the data with dplyr package”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: The profiler can be turned off by passing . . . . . . . . to Rprof().
    options:
      - "0"
      - "1"
      - "2"
      - "NULL"
    answer: 3
    explanation: NULL is the correct answer to “The profiler can be turned off by passing . . . . . . . . to Rprof().”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: which of the following functions can be used to finely control the appearance of all lattice plots ?
    options:
      - par()
      - print.trellis()
      - splom()
      - trellis.par.set()
    answer: 3
    explanation: trellis.par.set() is the correct answer to “which of the following functions can be used to finely control the appearance of all lattice plots”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: . . . . . . . . function is used to simulate binary random variables.
    options:
      - dnorm
      - rbinom()
      - binom()
      - rpois
    answer: 1
    explanation: rbinom() is the correct answer to “. . . . . . . . function is used to simulate binary random variables.”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: . . . . . . . . display contours of a 3d surface in 2d.
    options:
      - aes_contour
      - geom_contour
      - aes_gem
      - aes_auto
    answer: 1
    explanation: geom_contour is the correct answer to “. . . . . . . . display contours of a 3d surface in 2d.”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: . . . . . . . . modify a ggplot or theme object by adding on new components.
    options:
      - +.gg
      - "-.gg"
      - /.gg
      - .gg
    answer: 0
    explanation: +.gg is the correct answer to “. . . . . . . . modify a ggplot or theme object by adding on new components.”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: How many functions exist for tidying the data?
    options:
      - one
      - two
      - three
      - four
    answer: 2
    explanation: three is the correct answer to “How many functions exist for tidying the data”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: . . . . . . . . uses regex groups instead of a splitting pattern or position.
    options:
      - spread()
      - gather()
      - separate()
      - extract()
    answer: 2
    explanation: separate() is the correct answer to “. . . . . . . . uses regex groups instead of a splitting pattern or position.”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: . . . . . . . . generate aesthetic mappings that describe how variables in the data.
    options:
      - aes_all
      - aes_auto
      - aes
      - aes_string
    answer: 2
    explanation: aes is the correct answer to “. . . . . . . . generate aesthetic mappings that describe how variables in the data.”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: If I want to save a plot to a PDF file, which of the following is a correct way of doing that?
    options:
      - Construct the plot on the screen device and then copy it to a PDF file with dev.copy2pdf()
      - Construct the plot on the PNG device with png(), then copy it to a PDF with dev.copy2pdf()
      - Open the PostScript device with postscript(), construct the plot, then close the device with dev.off()
      - Open the screen device with quartz(), construct the plot, and then close the device with dev.off()
    answer: 0
    explanation: Construct the plot on the screen device and then copy it to a PDF file with dev.copy2pdf() is the correct answer to “If I want to save a plot to a PDF file, which of the following is a correct way of doing that”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: Which of the following is an example of a vector graphics device in R?
    options:
      - JPEG
      - PNG
      - GIF
      - SVG
    answer: 3
    explanation: SVG is the correct answer to “Which of the following is an example of a vector graphics device in R”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: You can time . . . . . . . . expressions by wrapping them in curly braces within the call to system.time().
    options:
      - smaller
      - longer
      - error
      - grater
    answer: 1
    explanation: longer is the correct answer to “You can time . . . . . . . . expressions by wrapping them in curly braces within the call to system.time().”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 20
    question: . . . . . . . . produces box-and-whisker plots.
    options:
      - xyplot
      - dotplot
      - barchart
      - bwplot
    answer: 3
    explanation: bwplot is the correct answer to “. . . . . . . . produces box-and-whisker plots.”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 21
    question: . . . . . . . . is used for relative sizing of theme elements.
    options:
      - rel
      - size
      - relative
      - timrinterval
    answer: 0
    explanation: rel is the correct answer to “. . . . . . . . is used for relative sizing of theme elements.”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 22
    question: How many methods exist for normalizing the data?
    options:
      - one
      - two
      - three
      - profiler
    answer: 1
    explanation: two is the correct answer to “How many methods exist for normalizing the data”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 23
    question: . . . . . . . . generate random Poisson variates with a given rate.
    options:
      - dnorm
      - rnorm
      - pnorm
      - rpois
    answer: 3
    explanation: rpois is the correct answer to “. . . . . . . . generate random Poisson variates with a given rate.”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 24
    question: . . . . . . . . is a systematic way to examine how much time is spent in different parts of a program.
    options:
      - Profiling
      - Monitoring
      - Logging
      - Debugging
    answer: 0
    explanation: Profiling is the correct answer to “. . . . . . . . is a systematic way to examine how much time is spent in different parts of a program.”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 25
    question: . . . . . . . . is the most common probability distribution to work with.
    options:
      - Gaussian
      - Parametric
      - Paradox
      - Simulation
    answer: 0
    explanation: Gaussian is the correct answer to “. . . . . . . . is the most common probability distribution to work with.”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 26
    question: . . . . . . . . is used to determine what is plotted for each group.
    options:
      - panel.expose
      - panel.impose
      - panel.superpose
      - panel.depose
    answer: 2
    explanation: panel.superpose is the correct answer to “. . . . . . . . is used to determine what is plotted for each group.”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 27
    question: Which of the following is a principle of analytic graphics?
    options:
      - Don't plot more than two variables at at time
      - Make judicious use of color in your scatterplots
      - Show box plots (univariate summaries)
      - Show causality, mechanism, explanation
    answer: 3
    explanation: Show causality, mechanism, explanation is the correct answer to “Which of the following is a principle of analytic graphics”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 28
    question: Parallel processing is done via . . . . . . . . package can make the elapsed time smaller than the user time.
    options:
      - parallel
      - statistics
      - distributed
      - symmetry
    answer: 0
    explanation: parallel is the correct answer to “Parallel processing is done via . . . . . . . . package can make the elapsed time smaller than the user time.”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 29
    question: What will be the output of the following R code? > pnorm(2)
    options:
      - "0.9772499"
      - "1.9772499"
      - "0.6772499"
      - "2.6772499"
    answer: 0
    explanation: 0.9772499 is the correct answer to “What will be the output of the following R code? > pnorm(2)”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 30
    question: . . . . . . . . produces bivariate scatterplots or time-series plots.
    options:
      - xyplot
      - dotplot
      - barchart
      - bwplot
    answer: 0
    explanation: xyplot is the correct answer to “. . . . . . . . produces bivariate scatterplots or time-series plots.”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 31
    question: Which of the following draws plot on current graphics device?
    options:
      - ggmissplot
      - printplot
      - print.ggplot
      - ggfluctuation
    answer: 2
    explanation: print.ggplot is the correct answer to “Which of the following draws plot on current graphics device”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 32
    question: Which of the following is a differentiation related aesthetic?
    options:
      - aes_position
      - aes_group_order
      - aes_linetype_size_shape
      - ggorder
    answer: 2
    explanation: aes_linetype_size_shape is the correct answer to “Which of the following is a differentiation related aesthetic”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 33
    question: What will be the output of the following R code? > x <- rnorm(10) > summary(x)
    options:
      - "[1] 0.01874617 -0.18425254 -1.37133055 -0.59916772 0.29454513 [6] 0.38979430 -1.20807618 -0.36367602 -1.62667268 -0.25647839"
      - "[1] 22.20356 21.51156 19.52353 21.97489 21.48278 20.17869 18.09011 [8] 19.60970 21.85104 20.96596"
      - Min. 1st Qu. Median Mean 3rd Qu. Max. 18.09 19.75 21.22 20.74 21.77 22.20
      - Error
    answer: 2
    explanation: Min. 1st Qu. Median Mean 3rd Qu. Max. 18.09 19.75 21.22 20.74 21.77 22.20 is the correct answer to “What will be the output of the following R code? > x <- rnorm(10) > summary(x)”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 34
    question: Which of the following function actually fits the linear model?
    options:
      - lm.time()
      - lm.date()
      - lm.fit()
      - lm.interval()
    answer: 2
    explanation: lm.fit() is the correct answer to “Which of the following function actually fits the linear model”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 35
    question: . . . . . . . . generate aesthetic mappings from a string.
    options:
      - aes_all
      - aes_auto
      - aes_string
      - aes_position
    answer: 2
    explanation: aes_string is the correct answer to “. . . . . . . . generate aesthetic mappings from a string.”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 36
    question: . . . . . . . . produces one-dimensional scatterplots.
    options:
      - xyplot
      - stripplot
      - barchart
      - bwplot
    answer: 1
    explanation: stripplot is the correct answer to “. . . . . . . . produces one-dimensional scatterplots.”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 37
    question: . . . . . . . . create a complete ggplot appropriate to a particular data type.
    options:
      - autoplot
      - is.ggplot
      - printplot
      - qplot_ggplot
    answer: 0
    explanation: autoplot is the correct answer to “. . . . . . . . create a complete ggplot appropriate to a particular data type.”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 38
    question: . . . . . . . . grammar makes a clear distinction between your data and what gets displayed on the screen or page.
    options:
      - ggplot1
      - ggplot2
      - d3.js
      - ggplot3
    answer: 1
    explanation: ggplot2 is the correct answer to “. . . . . . . . grammar makes a clear distinction between your data and what gets displayed on the screen or page.”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 39
    question: Annotation of plots in any plotting system involves adding points, lines, or text to the plot, in addition to customizing axis labels or adding titles. Different plotting systems have different sets of functions for annotating plots in this way. Which of the following functions can be used to annotate the panels in a multi-panel lattice plot?
    options:
      - points()
      - panel.abline()
      - lines()
      - axis()
    answer: 1
    explanation: panel.abline() is the correct answer to “Annotation of plots in any plotting system involves adding points, lines, or text to the plot, in addition to customizing axis labels or adding titles. Different plotting systems have different sets of functions for annotating plots in this way. Which of the following functions can be used to annotate the panels in a multi-panel lattice plot”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
  - id: 40
    question: What will be the output of the following R code? > set.seed(10) > x <- rbinom(100, 1, 0.5) > str(x)
    options:
      - int [1:100] 1 0 0 1 0 0 0 0 1 0 ...
      - int [1:100] 10 0 01 1 0 0 01 0 1 0 ...
      - int [1:100] 1 03 0 1 0 0 0 02 1 0 ...
      - int [1:100] 1 2 3 1 1 0 0 0 1 0 ...
    answer: 0
    explanation: int [1:100] 1 0 0 1 0 0 0 0 1 0 ... is the correct answer to “What will be the output of the following R code? > set.seed(10) > x <- rbinom(100, 1, 0.5) > str(x)”. This question is standard in competitive examination syllabi for Data Manipulation With Dplyr.
    keyConcept: Data Manipulation With Dplyr
    testedIn:
      - FPSC
      - PPSC
---


