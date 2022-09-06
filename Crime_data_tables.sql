DROP TABLE Division


-- Table 1 Police Region 

CREATE TABLE REGION (

	Year INT,
	Police_Region VARCHAR,
	Local_Government_Area VARCHAR, PRIMARY KEY
	Incidents_Recorded INT,
	Rate_per_100000_population INT
);
 SELECT * FROM REGION
 
--   Table 2 Police Divison with Police Region data field merged 
 CREATE TABLE DIVISION (
	Year INT,
	Police_Region VARCHAR,
	Police_Service_Area VARCHAR,
	Local_Government_Area VARCHAR PRIMARY KEY,
	Offence_Division VARCHAR,
	Offence_Subdivision VARCHAR,
	Offence_Subgroup VARCHAR,
	Incidents_Recorded INT,
	PSA_Rate_per_100000_population INT,
	LGA_Rate_per_100000_population INT
);
 SELECT * FROM DIVISION
 
CREATE TABLE CHARGESTATUS (
	Year INT,
	Local_Government_Area VARCHAR PRIMARY KEY,
	Charge_Status VARCHAR,
	Incidents_Recorded INT	
);
SELECT * FROM CHARGESTATUS
 
CREATE TABLE DIVISIONSUMMARY(
	Year INT,
	Local_Government_Area VARCHAR PRIMARY KEY,
	A_Crimes_against_the_person INT,
	B_Property_and_deception_offences INT,
	C_Drug_offences INT,
	D_Public_order_and_security_offences INT,
	E_Justice_procedures_offences INT,
	F_Other_Offences INT	
);
SELECT * FROM DIVISIONSUMMARY

 
 
 
 
