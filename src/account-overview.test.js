import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';

  const accountOverviewStub = {
    supportContact: {
      name: 'John Smith',
      email: 'john.smith@feefo.com'
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
      lastUploadDate: 1605001226079,
    }
  }

test('renders header', () => {
  render(<AccountOverview data={accountOverviewStub}/>);
  
  const title = screen.getByText(/Account Overview/i);
  expect(title).toBeInTheDocument();

  const contactTitle = screen.getByText(/Your feefo support contact/i);
  expect(contactTitle).toBeInTheDocument();

  const supportEmail = screen.getByText(/support@feefo\.com/i);
  expect(supportEmail).toBeInTheDocument();

  const contactNumber = screen.getByText(/020 3362 4208/i);
  expect(contactNumber).toBeInTheDocument();

  const totalUploads = screen.getByTestId("total-uploads");
  expect(totalUploads).toBeInTheDocument();
  expect(totalUploads).toHaveTextContent(`${accountOverviewStub.salesOverview.uploads} uploads`)

  const totalLines = screen.getByTestId("total-lines");
  expect(totalLines).toBeInTheDocument();
  expect(totalLines).toHaveTextContent(`${accountOverviewStub.salesOverview.linesAttempted}`)

  const uploadPercent = screen.getByTestId("upload-percent");
  expect(uploadPercent).toBeInTheDocument();
  expect(uploadPercent).toHaveTextContent(`${
    Math.round((100 * accountOverviewStub.salesOverview.successfulUploads) / accountOverviewStub.salesOverview.uploads)
  }%`)
  
    const linesSaved = screen.getByTestId("lines-saved-percent");
  expect(linesSaved).toBeInTheDocument();
  expect(linesSaved).toHaveTextContent(`${
    Math.round((100 * accountOverviewStub.salesOverview.linesSaved) / accountOverviewStub.salesOverview.linesAttempted)
  }%`)
});
