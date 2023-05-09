print ('===============================')
print ('회원가입')
print ('===============================')

register=False

while not register: 
    print('회원가입을 진행하시겠습니까?')
    print('Y: 진행             N:취소')
    answer=input('>>  ')
    answer=answer.lower()

    if answer =='y':
        register=True
        print ('===============================')
        print ('회원가입이 진행됩니다.')
        print ('===============================')
    elif answer =='n':
        register=False
        print ('===============================')
        print ('회원가입이 취소됩니다.')
        print ('===============================')
    else:
        register=False
        print ('===============================')
        print ('입력값을 확인해주세요.')
        print ('===============================')

    users = []

    while True: 
        user = {}
        username=input('ID: ')
        while True:
            pwd1 =input('PWD: ')
            pwd2 =input('PWD확인: ')
            if pwd1==pwd2:
                break
            else:
                print('패스워드가 일치하지 않습니다.')
        name=input('이름: ')
        while True:
            birth=input('생년월일(6자리): ')
            if len(birth)==6:
                break
            else:
                print('생년월일이 올바르게 입력되지 않았습니다. ')
        email=input('이메일: ')
        