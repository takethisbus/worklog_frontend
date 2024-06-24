import { TodoForm } from "@/features/todos/add";
import { TodoByDate } from "@/features/todos/list";
import { Layout } from "@/widgets/layout";
import { Box } from "@mui/material";

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
          <TodoByDate />
          <TodoForm />
        </Box>
      </Layout.Content>
    </Layout>
  );
};
