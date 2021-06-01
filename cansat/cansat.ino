int poten1=1;
int poten2=2;
int poten3=0;
int duracion;
int distancia;

void setup() {
 Serial.begin(9600);
pinMode(poten1,INPUT);
pinMode(poten2,INPUT);
pinMode(poten3,INPUT);


}

void loop() {
  String var=" ";
  int pot1=analogRead(poten1);
  int pot2=analogRead(poten2);
  int pot3=analogRead(poten3);
  
  Serial.println(pot1+var+pot2+var+pot3);
  delay(500);

}
