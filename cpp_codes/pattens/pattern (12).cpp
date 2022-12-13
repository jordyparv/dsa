#include<iostream>
using namespace std;
int main(){
    int star = 5;
    for(int i=1; i<=star; i++){

        for(int j=1; j<=i; j++){
            cout << j<<" ";
        }
        
        for(int k=((star-i)*4);k>0; k--){
                cout<<" ";
        }
        
        for(int j=i; j>0; j--){
            cout << j<<" ";
        }
        cout<<endl;
    }
}