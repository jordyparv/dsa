#include <iostream>
using namespace std;
int main(){
    int star = 5;
    for(int i=0; i<star; i++){
        char c = 65;
        for(int j=0; j<=i; j++){
            cout<<c++;
        }
        cout<<endl;
    }
}