#include<iostream>
using namespace std;
int main(){
    int star=5;
    for(int i=star;i>0;i--){
        int row = (i*2)-1;
        for(int j=star-i;j>0;j--){
            cout<<" ";
        }
        for(int k=row;k>0;k--){
            cout<<"*";
        }
        cout<<endl;
    }
}