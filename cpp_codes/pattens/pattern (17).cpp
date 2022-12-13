#include<iostream>
using namespace std;
int main(){
    int star = 5;
    for(int i=1; i<=star; i++){
        for(int j=star-i; j>0; j--){
            cout<<" ";
        }
        char c =65;
        int row= i*2;
        for(int k=1;k<i*2; k++){
            cout<<c;
            if(k<row/2)
                c++;
            else c--;
        }
        cout<<endl;
    }
}