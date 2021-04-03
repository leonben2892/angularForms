import { FormGroup, ValidatorFn, Validators } from '@angular/forms';

export function createPromoRangeValidator(): ValidatorFn {

  return(form: FormGroup): Validators | null => {
    const startDate: Date = form.get('promoStartAt').value;

    const endDate: Date = form.get('promoEndAt').value;

    if (startDate && endDate) {
      const isRandeValid = (endDate.getTime() - startDate.getTime() > 0);

      return isRandeValid ? null : { promoPeriod: true };
    }

    return null;
  };
}
