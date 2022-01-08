import styled from "styled-components";

export const WrapperStyled = styled.div`
  margin-top: 50px;
  padding-top: 5px;
  background-color: #eee;
  min-height: 100vh;
  padding-bottom: 50px;
  .title-page {
    margin: 20px;
    font-size: 24px;
    font-weight: 500;
    padding: 0 30px;
  }
  .list-rank {
    padding: 0 50px;
    .item-rank_content {
      display: flex;
      .stt {
        width: 5%;
      }
      .full-name {
        width: 50%;
      }
      .point {
        width: 20%;
      }
    }
  }
`;
