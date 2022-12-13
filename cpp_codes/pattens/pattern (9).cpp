#include<iostream>
using namespace std;
int main(){
    int star=5;
    for(int i=1;i<=star;i++){
        
        for(int j=(star)-i;j>0;j--){
            cout<<" ";
        }
        for(int k=0;k<i;k++){
            cout<<"* ";
        }
        cout<<endl;
    }
    for(int i=star-1;i>0;i--){
        
        for(int j=0;j<star-i;j++){
            cout<<" ";
        }
        for(int k=i;k>0;k--){
            
            cout<<"* ";
        }
        cout<<endl;
    }
}