import { Layout } from "@/widgets/layout";
import { Box } from "@mui/material";
import { TodoForm } from "@/entities/todos/ui/form";
import { TodoList } from "@/features/todo-list";

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
          <TodoForm />
        </Box>
      </Layout.Content>
    </Layout>
  );
};
