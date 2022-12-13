#include<iostream>
using namespace std;
void print(){}
template <typename T, typename... Types>
void print(T var1, Types... var2)
{
    cout << var1 << endl;
 
    print(var2...);
}
int main(){
int n=5;
int row = 0;

        for(int i=1; i<=n*2; i++){

            i <= n ? row++ : row--;
            i==n+1?row++:0;

            for(int j=1; j<=n*2; j++){
                
                if(j<=(n+1)-row||j>(n-1)+row)
                {
                    cout<<"*";
                }
                else cout<<" ";
            }
            
                cout<<endl;
        }

return 0;
}
