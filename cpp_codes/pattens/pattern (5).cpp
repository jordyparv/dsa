#include<iostream>
using namespace std;
int main(){
    int star=5;
    for(int i=star;i>=0;i--){
        for(int j=0;j<i;j++){
            cout<<"*";
    }
    cout<<endl;
}
}