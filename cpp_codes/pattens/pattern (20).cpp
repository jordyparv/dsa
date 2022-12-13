#include<iostream>
using namespace std;
int main(){
    int n=5;
    int row=0;
    for(int i=1; i<n*2; i++){
        i<=n?row++:row--;
        for(int j=1; j<=n*2; j++){
            if(j<=row || j>n*2-row)
            {
                cout<<"*";
            }
            else cout<<" ";
    }   
    cout<<endl;

}
return 0;
}