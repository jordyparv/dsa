#include<bits/stdc++.h>
using namespace std;

int main(){
    char roman [] = {'I','V','X','L','C','D','M'};
    int roman_int [] = {1,5,10,50,100,500,1000};

    int result = 0;
    string s ="MCMXCIV";
    for(int i = 0; i < s.length();i++)
    {
        for(int j=0;j< strlen(roman);j++){
                if(s[i]==roman[j]){
                    result+=roman_int[j];
                }
                

        }
    }
    cout<<result;
}
