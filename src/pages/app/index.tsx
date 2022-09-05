import { Container } from '../../components/atoms/Container';
import { Button } from '../../components/atoms/Button';
import { Composer } from '../../components/composer';
import { AppLayout } from '../../layouts/AppLayout';
import { PageWithLayout } from '../../types/NextExtensions';

const AppHomePage: PageWithLayout = () => {
  return (
    <div>
      <Container className='mx-auto'>
        <div>
          <Composer />
        </div>
        <div className="flex justify-center items-center rounded-md bg-gray-900 p-4 mt-4">
          <Button
            variant="secondary"
            title="Add to thread"
            ariaLabel="Add to thread"
            className="text-gray-500 hover:text-gray-200"
          >
            Create Thread
          </Button>
        </div>
      </Container>
    </div>
  );
};
AppHomePage.getLayout = (page) => <AppLayout>{page}</AppLayout>;
export default AppHomePage;
