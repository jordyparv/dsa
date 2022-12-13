#include <bits/stdc++.h>
using namespace std;
int main(){
    int num = 36;
    cout<<"The Divisors of "<<num<<" are: ";
    // for(int i=1; i<=num; i++)
    //     if(num%i==0)
    //          cout<<i<<" ";
    // 
    	for(int i = 1; i <= sqrt(num); i++)
		if(num % i == 0){
			cout << i << " ";
			if(i != num/i) cout << num/i << " ";
		}
	
	

}