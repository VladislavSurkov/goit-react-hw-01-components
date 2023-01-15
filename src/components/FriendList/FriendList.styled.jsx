import styled from '@emotion/styled';

export const Container = styled.ul`
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 20px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: var(--bg);
  box-shadow: var(--main-shadow);
  border-radius: 10px;
`;

export const Friend = styled.li`
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  background-color: var(--bg);
  box-shadow: var(--main-shadow);
  border-radius: 10px;
`;

export const ConditionOnline = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: var(--main-shadow);

  background-color: ${props => {
    switch (props.type){
      case 'true':
        return 'var(--online)'
      default:
        return 'var(--offline)'
    }
  }}
 
`;

// export const Offline = styled.div`

//   background-color: var(--offline), ;
 
// `;

export const Name = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: var(--secondary);
  text-shadow: var(--main-shadow);
`;
