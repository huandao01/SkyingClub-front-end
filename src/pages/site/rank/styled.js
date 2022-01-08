import styled from "styled-components";

export const WrapperStyled = styled.div`
  margin-top: 50px;
  background-color: #eee;
  min-height: 100vh;
  padding: 50px 0;
  box-shadow: 1px 5px #222;
  .title-page {
    margin: 20px;
    font-size: 24px;
    font-weight: 500;
    padding: 0 30px;
    text-align: center;
  }
  .list-rank {
    margin: 0 15%;
    background-color: white;
    padding: 10px 20px;
    td {
      font-size: 18px;
    }
    .full-name {
      display: flex;
      align-items: center;
      .avatar {
        margin-right: 20px;
        img {
          border-radius: 50%;
          width: 50px;
          height: 50px;
        }
      }
    }
    td {
      &.point {
        color: crimson;
        span {
          font-size: 15px;
        }
      }
    }

    .ant-table-thead {
      tr {
        th {
          padding: 10px;
          background-color: #e9eff7;
          color: #555;
          font-size: 14px;
          font-weight: bold;
          text-align: center !important;
        }
      }
    }
  }
`;
