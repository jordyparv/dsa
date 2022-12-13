#include<iostream>
using namespace std;
int main(){
    int star=5;
    for(int i=1;i<=star;i++){
        int row = (i*2)-1;
        for(int j=star-i;j>=0;j--){
            cout<<" ";
        }
        for(int j=0;j<row;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}