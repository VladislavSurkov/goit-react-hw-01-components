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

export const Online = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  background-color: var(--online);
  border-radius: 50%;
  box-shadow: var(--main-shadow);
 
`;

export const Offline = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--offline);
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: var(--secondary);
  text-shadow: var(--main-shadow);
`;