import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import { Button, Htag, Paragraph, Raiting, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }): JSX.Element {
  const [raiting, setRaiting] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Заголовок</Htag>
      <Button appearance="primary">Узнать подробнее</Button>
      <Button appearance="ghost" arrow="right">
        Читать отзывы
      </Button>
      <Paragraph>
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </Paragraph>
      <Htag tag="h2">Hello welcome to hell</Htag>
      <Tag color="green" size="small">
        -1000
      </Tag>
      <Raiting isEditible raiting={raiting} setRaiting={setRaiting}></Raiting>
      <Tag color="red" size="medium" href="https://hh.ru/">
        hh.ru
      </Tag>
      <ul>
        {menu.map((el) => (
          <li key={el._id.secondCategory}>{el._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    firstCategory
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
