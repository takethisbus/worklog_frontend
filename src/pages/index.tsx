import { Layout } from "@/widgets/layout";
import { Box } from "@mui/material";
import { InputBox } from "@/entities/todos/ui/inputBox";
import { TodoList } from "@/entities/todos/ui/list";

export const Home = () => {
  return (
    <Layout>
      <Layout.Lsb />
      <Layout.Content>
        <Box
          display="flex"
          flexDirection="column"
          gap={4}
          sx={{
            p: 6
          }}
        >
          <TodoList />
          <InputBox />
        </Box>
      </Layout.Content>
    </Layout>
  );
};
