#include <iostream>
#include  <fstream>
#include <string>
using namespace std;
int main(){
ifstream myfile;
myfile.open("app.txt");
string mystring;
if ( myfile.is_open() ) { // always check whether the file is open
myfile >> mystring; // pipe file's content into stream
cout << mystring; // pipe stream's content to standard output
}
}
