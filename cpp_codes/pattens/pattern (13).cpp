#include<iostream>
using namespace std;
int main(){
    int number=1;
    int star = 5;
    for(int i=0;i<star;i++){
        for(int j=0;j<=i;j++){
            cout<<number++<<" ";
    }
    cout<<endl;
}
}