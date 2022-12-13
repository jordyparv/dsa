#include<iostream>
using namespace std;
string paddingStar(string str,string prev){
    string ss=str;
     ss.append(string(" ")+prev);
     return ss;
}
int main(){
    int star = 5;
    string str ="";
    for(int i = 1; i <=star; i++){
            if(i%2==0){
            str = paddingStar("0",str);
            }
            else {
                str = paddingStar("1",str);
            }            
            cout<<str<<endl;
    }
}