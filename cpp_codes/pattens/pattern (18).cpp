#include<iostream>
using namespace std;
int main(){
    int star = 5;
    for(int i=0; i<star;i++){
        for(int j=0;j<=i;j++){
            char c=(64+star)-(j);
            cout<<c--<<" ";
        }
        cout<<endl;
    }
}