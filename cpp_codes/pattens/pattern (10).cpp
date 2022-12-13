#include<iostream>
using namespace std;
int main(){
    int star=5;
    for(int i=0;i<star;i++){
        for(int k=0;k<=i;k++){
            cout<<"*";
        }
        cout<<endl;
    } for(int i=star;i>0;i--){
        for(int k=i;k>0;k--){
            cout<<"*";
        }
        cout<<endl;
    }
}