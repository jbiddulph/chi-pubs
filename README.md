# Chichester pubs

    // DB Credentials
    $dbhost = 'xxxx';
    $dbuser = 'xxxx';
    $dbpass = 'xxxx';
    $dbname = 'xxxx';
    
    //DB connection
    $dblink = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
    
    //Successful connection?
    if ($dblink->connect_errno) {
        printf("Failed to connect to database");
        exit();
    }
    
    //Get all pubs that are in chichester
    $result = $dblink->query("SELECT * FROM pubs WHERE rsTown = 'Chichester'");
    
    //Initialize array variable
    $dbdata = array();
    
    //loop through the array
    while ( $row = $result->fetch_assoc())  {
        $dbdata[]=$row;
    }
    
    //echo the array in JSON
    echo json_encode($dbdata);
