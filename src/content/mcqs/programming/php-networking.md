---
title: Php Networking MCQs with Explanations
description: Practice high-yield Programming & Software Development MCQs on Php Networking with worked academic solutions for FPSC, PPSC, NTS, NITB, PTS.
subject: programming
subjectName: Programming & Software Development
topic: php-networking
topicName: Php Networking
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
    question: Which one of the following function checks for the existence of DNS records?
    options:
      - checkdns()
      - checkdnsr()
      - checkdnsrr()
      - checkdnsa()
    answer: 2
    explanation: DNS records are checked based on the supplied host value and optional DNS resource record type, returning TRUE if any records are located and FALSE otherwise.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 2
    question: Which one of the following function returns the port number of a specified service?
    options:
      - getportname()
      - getservername()
      - getserverbyname()
      - getservbyname()
    answer: 3
    explanation: Example- getservbyname(“http”,”tcp”) will return 80.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 3
    question: Which one of the following statements can be used to establish port 80 connection with www.examhub.pk?
    options:
      - fsockopen(“www.examhub.pk”, 80)
      - sockopen(80,”www.examhub.pk”)
      - fsockopen(80,”www.examhub.pk”)
      - sockopen(“www.examhub.pk”, 80)
    answer: 0
    explanation: The fsockopen() function establishes a connection to the resource designated by target on port.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 4
    question: Which one of the following function is used to send a e-mail using PHP script?
    options:
      - mail_send()
      - send_mail()
      - mailrr()
      - mail()
    answer: 3
    explanation: mail(string to, string subject, string message,) using this you can send any mail.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 5
    question: How many configuration directives pertinent to PHP’s mail function are available?
    options:
      - "4"
      - "5"
      - "6"
      - "7"
    answer: 1
    explanation: They are- SMTP, sendmail_from, sendmail_path, smtp_port, mail.force_extra_parameters.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 6
    question: Which of the following statements is used to add an attachment to the mail?
    options:
      - $mimemail->attachment(‘attachment.pdf’)
      - $mimemail=>attachment(‘attachment.pdf’)
      - $mimemail->addAttachment(‘attachment.pdf’)
      - $mimemail=>addAttachment(‘attachment.pdf’)
    answer: 2
    explanation: Call the Mail_Mime object’s addAttachment() method passing in the attachment name and extension.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 7
    question: Which one of the following function is used to return an array consisting of various DNS resource records pertinent to a specific domain?
    options:
      - dns_get_record()
      - dns_record()
      - dnsrr_get_record()
      - dnsrr_record()
    answer: 0
    explanation: dns_get_record() is the correct answer to “Which one of the following function is used to return an array consisting of various DNS resource records pertinent to a specific domain”. This question is standard in competitive examination syllabi for Php Networking.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 8
    question: Which one of the following function is used to retrieve the MX records for the domain specified by hostname?
    options:
      - getmx()
      - retrieve_mx()
      - getmxrr()
      - retrieve_mxrr()
    answer: 2
    explanation: getmxrr() is the correct answer to “Which one of the following function is used to retrieve the MX records for the domain specified by hostname”. This question is standard in competitive examination syllabi for Php Networking.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 9
    question: What is the default port number of HTTP’s?
    options:
      - "70"
      - "80"
      - "90"
      - "100"
    answer: 1
    explanation: 80 is the correct answer to “What is the default port number of HTTP’s”. This question is standard in competitive examination syllabi for Php Networking.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 10
    question: What function can you use to create your own streams using the PHP stream wrappers and register them within PHP?
    options:
      - wrapper_register
      - stream_wrapper
      - stream_wrapper_register
      - stream_wrapper_reg
    answer: 2
    explanation: stream_wrapper_register is the correct answer to “What function can you use to create your own streams using the PHP stream wrappers and register them within PHP”. This question is standard in competitive examination syllabi for Php Networking.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 11
    question: The windows version of PHP has built-in support for the FTP extension
    options:
      - "True"
      - "False"
    answer: 0
    explanation: True is the correct answer to “The windows version of PHP has built-in support for the FTP extension”. This question is standard in competitive examination syllabi for Php Networking.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 12
    question: The ftp_mkdir() function creates a directory on the FTP server.
    options:
      - ftp_mkdir()
      - ftp_makekdir()
      - ftp_mkdirectory()
      - Both A & B
    answer: 0
    explanation: ftp_mkdir() is the correct answer to “The ftp_mkdir() function creates a directory on the FTP server.”. This question is standard in competitive examination syllabi for Php Networking.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 13
    question: Which of the following operations cannot be performed using the standard ftp:// stream wrapper? 1. Reading a file 2. Writing a file 3. Establishing a stateful connection and changing directories interactively 4. Creating a new directory
    options:
      - Option 3 and 4
      - Option 1 and 3
      - Option 2 and 4
      - Option 1 and 4
    answer: 0
    explanation: Option 3 and 4 is the correct answer to “Which of the following operations cannot be performed using the standard ftp:// stream wrapper? 1. Reading a file 2. Writing a file 3. Establishing a stateful connection and changing directories interactively 4. Creating a new directory”. This question is standard in competitive examination syllabi for Php Networking.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 14
    question: What will the following script do? <?php echo getservbyname ( 'ftp', 'tcp' ) ; ?>
    options:
      - A list of the FTP servers on the local network
      - The address of the FTP server called “tcp”
      - The port associated with the TCP service called “FTP”
      - A list of the ports associated with all services except FTP
    answer: 2
    explanation: The port associated with the TCP service called “FTP” is the correct answer to “What will the following script do? <?php echo getservbyname ( 'ftp', 'tcp' ) ; ?>”. This question is standard in competitive examination syllabi for Php Networking.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 15
    question: The ftp_size() function returns the size of a specified file on the FTP server.
    options:
      - get_ftp_size()
      - ftp_file_size()
      - ftp_size()
      - ftp_amount()
    answer: 2
    explanation: ftp_size() is the correct answer to “The ftp_size() function returns the size of a specified file on the FTP server.”. This question is standard in competitive examination syllabi for Php Networking.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 16
    question: When dealing with timeout values in sockets, the connection timeout can be changed independently of the read/write time out. Which function must be used for this purpose?
    options:
      - stream_get_timeout
      - stream_set_timeout
      - stream_fset_timeout
      - stream_fget_timeout
    answer: 1
    explanation: stream_set_timeout is the correct answer to “When dealing with timeout values in sockets, the connection timeout can be changed independently of the read/write time out. Which function must be used for this purpose”. This question is standard in competitive examination syllabi for Php Networking.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 17
    question: Which of the following network transports doesn’t PHP support?
    options:
      - tcp
      - udp
      - udg
      - pdc
      - unix
    answer: 3
    explanation: pdc is the correct answer to “Which of the following network transports doesn’t PHP support”. This question is standard in competitive examination syllabi for Php Networking.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 18
    question: The FTP functions are used to ....... files from file servers.
    options:
      - Open
      - Download
      - Close
      - Upload
      - All of above
    answer: 4
    explanation: All of above is the correct answer to “The FTP functions are used to ....... files from file servers.”. This question is standard in competitive examination syllabi for Php Networking.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
  - id: 19
    question: Which of the following are valid PHP stream transports? 1. http 2. STDIO 3. ftp 4. STDOUT 5. stream
    options:
      - Option 3 and 5
      - Option 1 and 4
      - Option 4 and 5
      - Option 2 and 5
    answer: 3
    explanation: Option 2 and 5 is the correct answer to “Which of the following are valid PHP stream transports? 1. http 2. STDIO 3. ftp 4. STDOUT 5. stream”. This question is standard in competitive examination syllabi for Php Networking.
    keyConcept: Php Networking
    testedIn:
      - FPSC
      - PPSC
---


