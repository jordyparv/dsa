#include<iostream>
using namespace std;
int main(){
    int star = 5;
     char c = 65;
    for(int i=0; i<star; i++)
    {
        for(int j=0;j<=i;j++){
            cout<<c;
        }
        c++;
        cout<<endl;
    }
}
